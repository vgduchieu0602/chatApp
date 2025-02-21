import { Member, Profile, Server } from "@prisma/client";

import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

//+ kiểu này dùng khi bạn cần lấy dữ liệu Server kèm theo danh sách Members và Profile tương ứng của từng Member
//+ Giúp Typescript hiểu cấu trúc dữ liệu trả về từ Prisma khi dùng 'include' để join bảng
//Server: kiểu gốc từ Prisma
//members: mảng các object kết hợp
//=== Member: thông tin thành viên từ bảng Member
//=== {profile: Profile}: thêm trường profile chứa dữ liệu từ bảng Profile
export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    }
  }
}