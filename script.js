const searchToggle=document.getElementById("searchToggle");
const searchPanel=document.getElementById("searchPanel");
const searchInput=document.getElementById("searchInput");
const clearSearch=document.getElementById("clearSearch");
const categories=[...document.querySelectorAll(".category")];
const videoItems=[...document.querySelectorAll(".video-item")];

function applyFilters(){
  const query=searchInput.value.trim().toLowerCase();
  const active=document.querySelector(".category.active")?.dataset.filter||"all";
  let visible=0;
  videoItems.forEach(item=>{
    const type=item.dataset.type;
    const text=(item.dataset.search||"").toLowerCase();
    const matchesQuery=!query||text.includes(query);
    const matchesCategory=active==="all"||
      (active==="music"&&type==="music")||
      (active==="video"&&type==="video")||
      (active==="trending"&&item.closest(".trending-section,.featured-section"));
    const show=matchesQuery&&matchesCategory;
    item.hidden=!show;
    if(show)visible++;
  });
  let empty=document.getElementById("emptyState");
  if(!visible){
    if(!empty){empty=document.createElement("div");empty.id="emptyState";empty.className="empty-state";empty.textContent="No matching videos found. Try another search.";document.getElementById("videoFeed").appendChild(empty);}
  }else if(empty){empty.remove();}
}
searchToggle.addEventListener("click",()=>{
  searchPanel.classList.toggle("hidden");
  if(!searchPanel.classList.contains("hidden"))searchInput.focus();
});
searchInput.addEventListener("input",applyFilters);
clearSearch.addEventListener("click",()=>{searchInput.value="";applyFilters();searchInput.focus();});
categories.forEach(button=>button.addEventListener("click",()=>{
  categories.forEach(item=>item.classList.remove("active"));
  button.classList.add("active");
  applyFilters();
}));
document.querySelectorAll("[data-filter-shortcut]").forEach(button=>button.addEventListener("click",()=>{
  const target=button.dataset.filterShortcut;
  const tab=categories.find(item=>item.dataset.filter===target);
  if(tab)tab.click();
  window.scrollTo({top:0,behavior:"smooth"});
}));

const accountModal=document.getElementById("accountModal");
const uploadModal=document.getElementById("uploadModal");
document.getElementById("profileButton").addEventListener("click",()=>accountModal.showModal());
document.getElementById("uploadButton").addEventListener("click",()=>uploadModal.showModal());
document.getElementById("uploadSignIn").addEventListener("click",()=>{uploadModal.close();accountModal.showModal();});
document.querySelectorAll("[data-close]").forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
document.getElementById("googleSignIn").addEventListener("click",()=>alert("Google sign-in is not connected in this front-end package yet."));
document.querySelectorAll(".bottom-item").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".bottom-item").forEach(item=>item.classList.remove("selected"));
  button.classList.add("selected");
  const page=button.dataset.nav;
  if(page==="profile")accountModal.showModal();
  else if(page==="library")alert("Your Library will be connected when accounts and saved items are added.");
  else if(page==="explore"){searchPanel.classList.remove("hidden");searchInput.focus();window.scrollTo({top:0,behavior:"smooth"});}
  else window.scrollTo({top:0,behavior:"smooth"});
}));
document.querySelectorAll(".big-play,.feed-play").forEach(button=>button.addEventListener("click",()=>alert("Video playback will be connected when the video service is added.")));
