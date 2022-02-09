import type { LinksFunction, LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";
import { getUser, requireUserId } from "~/utils/session.server";
import stylesUrl from "~/styles/protected.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);

  return { user };
};

export default function Protected() {
  const data = useLoaderData();
  return (
    <div>
      <div>Hello {data.user.username} You are logged in.</div>
      <Link to="/logout">Log out</Link>
    </div>
  );
}
