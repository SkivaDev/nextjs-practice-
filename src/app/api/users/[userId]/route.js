const { NextResponse } = require("next/server");

export async function GET(request, { params }) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const user = await res.json();

  return NextResponse.json(user);
}