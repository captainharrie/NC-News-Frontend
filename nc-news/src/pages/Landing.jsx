import ArticlesGrid from "../components/ArticlesGrid";

export default function Landing() {
  return (
    <>
      <h2 className="text-3xl mb-3">Top Articles</h2>
      <ArticlesGrid sort="votes" limit="6"></ArticlesGrid>

      <h2 className="text-3xl mb-3 mt-10">Recent Articles</h2>
      <ArticlesGrid limit="6"></ArticlesGrid>
    </>
  );
}
