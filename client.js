
async function fetchRootDir(){
   const res=await fetch("http://localhost:3000/");
   const data=await res.json();
   return data;
}

async function getFiles(data){
  const promiseArray=[];
   for(const obj of data.items){
     if(obj.isDir==true){
      const res=await fetch(`http://localhost:3000/${obj.name}`);
      const dir=await res.json();
      promiseArray.push(dir);
     }
   }

   return Promise.all(promiseArray);
}

async function main() {
  try{
   const data=await fetchRootDir();
   let fileData=await getFiles(data);
  console.log(JSON.stringify(fileData,null,2));
  }
  catch(error){
    console.log('Error occured',error);
  }
}
main();


