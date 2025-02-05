import { Card, Skeleton } from "@nextui-org/react";

function HomeCardSkeleton() {
  return (
    <Card className="rounded-[10px]">
      <Skeleton>
        <div className="h-[200px] bg-default-300" />
      </Skeleton>
      <div className="space-y-3 p-4">
        <Skeleton className="w-full rounded-lg">
          <div className="h-5 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg !mt-4">
          <div className="h-4 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  )
}

export default HomeCardSkeleton;