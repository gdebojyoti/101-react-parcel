import Header from "../components/Header";

function pagewrap (Page, { key } = {}) {
  return () => {
    return <>
      <Header key={key} />
      <Page />
    </>
  }
}

export default pagewrap