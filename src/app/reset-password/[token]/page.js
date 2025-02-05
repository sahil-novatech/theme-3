import ResetPassword from "@/components/ResetPassword";

export default function ResetPasswordPage({ params }) {
  const { token } = params;
  return <ResetPassword token={String(token)} />
}