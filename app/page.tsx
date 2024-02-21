"use client";

import Link from "next/link";
import { supabase } from "./features/auth/lib/supabaseClient";
import Button from "./features/auth/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleBlogPost = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data);
    if (data.session) {
      router.push("/create-post");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-medium mb-5 text-3xl">Hello RHF & Zod</h2>
      <div className="flex gap-3">
        <Link
          href={"/auth/signup"}
          className="bg-red-500 py-3 px-5 rounded-md text-white hover:bg-red-600 duration-200"
        >
          新規登録
        </Link>
        <Link
          href={"/auth/login"}
          className="bg-blue-500 py-3 px-5 rounded-md text-white hover:bg-blue-600 duration-200"
        >
          ログイン
        </Link>
      </div>
      <Button
        colorClass="bg-slate-500 mt-4"
        onClick={async () => await supabase.auth.signOut()}
        type="button"
      >
        ログアウト
      </Button>
      <Button
        colorClass="bg-green-500 mt-4"
        onClick={handleBlogPost}
        type="button"
      >
        ブログ投稿
      </Button>
    </main>
  );
}
