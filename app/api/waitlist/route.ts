import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, type, updates } = body

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!['vendor', 'creator', 'both'].includes(type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user type' },
        { status: 400 }
      )
    }

    // SIMULATION: In a real app, this would save to a database (Postgres/MongoDB)
    // and trigger an email via SendGrid/Mailgun.
    console.log('[WAITLIST SUBMISSION]', {
      email,
      type,
      updates,
      timestamp: new Date().toISOString()
    })

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!'
    })

  } catch (error) {
    console.error('Waitlist API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
