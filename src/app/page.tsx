import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "Hello this is void"}))
  return(
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading the response...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}
export default Page