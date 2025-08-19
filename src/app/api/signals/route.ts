import { NextResponse } from 'next/server'

type SignalItem = {
  source: string
  title: string
  url: string
  date?: string
  tags?: string[]
}

async function fetchGdelt(keywords: string[]): Promise<SignalItem[]> {
  try {
    const query = keywords.length ? keywords.join(' OR ') : 'defense OR space force OR SDA'
    const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=ArtList&maxrecords=10&format=json`
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json().catch(() => ({} as any))
    const arts = Array.isArray(data?.articles) ? data.articles : []
    return arts.map((a: any) => ({ source: 'gdelt', title: a.title, url: a.url, date: a.seendate }))
  } catch {
    return []
  }
}

async function fetchDefenseRss(): Promise<SignalItem[]> {
  try {
    const url = 'https://www.defense.gov/desktopmodules/articlecs/rss.ashx?contenttype=1&site=286&max=10'
    const res = await fetch(url, { cache: 'no-store' })
    const xml = await res.text()
    const items: SignalItem[] = []
    const re = /<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<pubDate>([\s\S]*?)<\/pubDate>[\s\S]*?<\/item>/gi
    let m
    while ((m = re.exec(xml)) !== null) {
      const title = m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()
      const link = m[2].trim()
      const date = m[3].trim()
      items.push({ source: 'defense.gov', title, url: link, date })
    }
    return items.slice(0, 10)
  } catch {
    return []
  }
}

async function fetchUsaSpending(keywords: string[]): Promise<SignalItem[]> {
  try {
    const body = {
      fields: ['Award ID', 'Recipient Name', 'Award Amount', 'Action Date', 'Awarding Agency Name'],
      filters: { keywords: keywords.length ? keywords : ['Space Development Agency', 'Missile Defense'] },
      page: 1,
      limit: 10,
      sort: 'Action Date',
      order: 'desc',
    }
    const res = await fetch('https://api.usaspending.gov/api/v2/search/spending_by_award/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    })
    const data = await res.json().catch(() => ({} as any))
    const results = Array.isArray(data?.results) ? data.results : []
    return results.map((r: any) => ({
      source: 'usaspending',
      title: `${r?.recipient_name || 'Recipient'} — $${r?.award_amount || 'N/A'} (${r?.action_date || ''})`,
      url: 'https://www.usaspending.gov/search',
      date: r?.action_date,
    }))
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tags = (searchParams.get('tags') || '').split(',').map(t => t.trim()).filter(Boolean)
    const keywords = tags.length ? tags : ['SDA', 'Space Force', 'Missile Defense', 'BAA', 'SBIR']

    const [gdelt, rss, spend] = await Promise.all([
      fetchGdelt(keywords),
      fetchDefenseRss(),
      fetchUsaSpending(keywords),
    ])

    const items = [...gdelt, ...rss, ...spend]
      .sort((a, b) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()))
      .slice(0, 20)

    return NextResponse.json({ ok: true, items })
  } catch {
    return NextResponse.json({ ok: false, items: [] }, { status: 500 })
  }
}


