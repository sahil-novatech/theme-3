import Blog from "@/components/Blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  const { blogId } = await params;
  return blogId ? <Blog blogId={blogId} /> : null;
}