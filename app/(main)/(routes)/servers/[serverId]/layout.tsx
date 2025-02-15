import ServerSideBar from "@/components/server/server-sidebar";
import currentProfile from "@/lib/current-profile";
import db from "@/lib/db";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  //params để có thể đọc những gì có trong URL hiện tại
  const profile = await currentProfile();

  const { redirectToSignIn } = await auth();

  if (!profile) {
    return redirectToSignIn();
  }

  //Sau khi đảm bảo đã xử lý xong các async operations mới truy cập vào params.serverId
  //Giúp Typescript hiểu rõ thời điểm truy cập params
  const { serverId } = await params;

  //vì đặt tên folder là serverId nên params sẽ là serverId
  const server = await db.server.findUnique({
    where: {
      id: serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSideBar serverId={serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
