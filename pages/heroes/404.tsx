import Layout from "../Layout";

function NotFoundPage() {
  return (
    <div>
      <h2>Not found</h2>
      <div>This page could not be found.</div>
    </div>
  );
}

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default NotFoundPage;
