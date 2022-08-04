function Adbar(){
    const urlArr = ["https://i.pinimg.com/236x/43/77/73/437773563410d5f7353d97e84ec5ee1f.jpg", "https://hotlard.files.wordpress.com/2008/06/singles-net-sarahc_1225.png", "https://pics.me.me/thumb_single-ballers-in-your-area-70269911.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneoeA1BiEsx7iDpD1n8C6vHD70oBOI6Zttw&usqp=CAU"]
    const random = Math.floor(Math.random() * urlArr.length);
    const random2 = Math.floor(Math.random() * urlArr.length);
    const random3 = Math.floor(Math.random() * urlArr.length);
    return(
        <div className="ads-bar">
            <img src={urlArr[random]} alt='hot single moms'></img><br></br>
            <img src={urlArr[random2]} alt='hot single moms'></img><br></br>
            <img src={urlArr[random3]} alt='hot single moms'></img>
        </div>
    )
}
export default Adbar;