function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>Bank Activity History</h5>
    {JSON.stringify(ctx)}<br/>
    <h1>photo credit: bgs_digital_creator</h1>
    </>
  );
}
