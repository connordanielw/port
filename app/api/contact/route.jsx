
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    //  Possible to:
    //  Relay the data to an email service
    //  Write it to a Google Sheet
    //  Push it into Supabase

    console.log('New contact submission:', { fullName, email, phone, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
