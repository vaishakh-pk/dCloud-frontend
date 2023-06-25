
function mycloudpage() {
    return(
<>
<Head>
<title>D Cloud Layout</title>
<link rel="stylesheet" href="mycloudpage.css"/>
</Head>
  
  <div className="container">
    <div className="left-side">
      {/* Content for the left side */}
      <div className="profile-photo">
        <img src="avatar.png" alt="Profile Photo" />
      </div>
      <div>
        <button className="button1">My Cloud</button>
        <button className="button1">Shared Files</button>
        <button className="button1">Favorites</button>
        <button className="button1">Upload Files</button>
      </div>
      <div className="leftbuttonbottom">
        <button className="button2">Settings</button>
        <button className="button2">Log out</button>
      </div>
    </div>
    <div className="main-content">
      {/* Main content in the middle */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Type here..."
        />
        <button className="search-button">Search</button>
      </div>
      <div className="filecategories">
        <p>Categories</p>
        <button className="pic">Pictures</button>
        <button className="doc">Documents</button>
        <button className="vid">Videos</button>
        <button className="aud">Audio</button>
      </div>
      <div className="filedivision">
        <p>Files</p>
        <button className="filesbutton">Work</button>
        <button className="filesbutton">Personal</button>
        <button className="filesbutton">Archive</button>
        <button className="plusbutton">
          <img src="plus.png" alt="Button Image" />
        </button>
      </div>
      <div className="recentfiles">
        <p className="recentflcapt">Recent files</p>
        <button className="longbutton">file_0001</button>
        <button className="longbutton">file_0002</button>
        <button className="longbutton">file_0003</button>
      </div>
    </div>
    <div className="right-side">
      {/* Content for the right side */}
      <div className="addfl">
        <button className="addfiles">Add new files</button>
      </div>
      <div className="rectanglestorage">
        <div className="storage-meter">
          <p className="stor">Storage</p>
          <progress value={50} max={100} />
          <span>50 %</span>
        </div>
      </div>
    </div>
  </div>
</>
    )
}