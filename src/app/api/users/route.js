const { NextResponse } = require("next/server");

export async function GET() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();


  return NextResponse.json(users);
}

export async function POST(request) {

  const {nombre, apellido, edad} = await request.json();
  console.log(nombre, apellido, edad)

  return NextResponse.json({
    message: "User created",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "User updated",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "User deleted",
  });
}
