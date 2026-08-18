'use client';
import { useState } from "react";

type BackendResponse = {
  success: boolean;
  message: string;
}

export default function Home() {
  const [api, setApi] = useState<BackendResponse | null>(null);
  const callBackend = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/health`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json(); 
    if(data) setApi(data);
  };
  return (
    <div>
      {api && <p>{api.message}</p>}
      <button onClick={() => callBackend()}>Test Backend</button>
    </div>
  );
}
