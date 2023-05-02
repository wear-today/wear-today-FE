
function Searchinput(props) {
    
    const onChange = (e) => {
        props.setSearch(e.target.value)
    }

    return (
    <div >
      <input onChange={onChange}/>
        <button onClick={e=>props.setSearchBtn(!props.searchbtn)}>검색</button>
      </div>
    );
  }
  
  export default Searchinput;
  