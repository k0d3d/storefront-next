import { NextResponse } from 'next/server'

export async function GET() {
  // SIMULATION: Fetch these from a real database or Redis cache
  // These numbers could be dynamic based on real usage
  
  const stats = {
    stores: 12852,
    trades: 2300000, // $2.3M
    creators: 4501,
    dropsToday: 420,
    satisfaction: 89
  }

  return NextResponse.json(stats)
}
