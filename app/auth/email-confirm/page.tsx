"use client";

import Button from "@/app/features/auth/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const ConfirmEmail = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="max-w-xl w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md text-center">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          メールアドレスの確認が必要です。
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          登録時に入力したメールアドレスに確認メールを送信しました。
          メール内のリンクをクリックしてアカウントの確認を行ってください。
        </p>
        <Button
          colorClass="bg-blue-500 hover:bg-blue-700"
          onClick={() => router.push("/auth/login")}
          type="button"
        >
          ログインページへ
        </Button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
