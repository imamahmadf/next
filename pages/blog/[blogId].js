import { useRouter } from "next/router";

const blogId = () => {
  const router = useRouter();
  const { blogId } = router.query;
  return <div>blogId: {blogId}</div>;
};

export default blogId;
