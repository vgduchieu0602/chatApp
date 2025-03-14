"use client";

import CreateChannelModal from "@/components/modals/create-channel-modal";
import CreateServerModal from "@/components/modals/create-server-modal";
import DeleteChannelModal from "@/components/modals/delete-channel-modal";
import DeleteMessageModal from "@/components/modals/delete-message-modal";
import DeleteServerModal from "@/components/modals/delete-server-modal";
import EditChannelModal from "@/components/modals/edit-channel-modal";
import EditServerModal from "@/components/modals/edit-server-modal copy";
import InviteModal from "@/components/modals/invite-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import MembersModal from "@/components/modals/members-modal";
import MessageFileModal from "@/components/modals/message-file-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  //Tránh cập nhật state trên component đã unmount
  //vì nó không phải là một react server component, sự khác biệt giữa react server component và client componet
  //đều trong SSR nhưng sử dụng client có nghĩa là nó cũng được hiển thị lên client nên gây ra lỗi hydration
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    console.log("ModalProvider not mounted");
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};
