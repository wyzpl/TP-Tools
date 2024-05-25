import { query } from "@/lib/db";

export async function POST(request) {
  try {
    const { name } = await request.json();
    const updateUsers = await query({
      query: "INSERT INTO nav_list (`name`) VALUES (?)",
      values: [name],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const user = {
      name: name,
    };
    return new Response(
      JSON.stringify({
        message: message,
        status: 200,
        product: user,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        data: request,
      })
    );
  }
}
