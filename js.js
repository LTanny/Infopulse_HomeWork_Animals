var animals=[
	{
  	name:'Squirrel',
    class:'mammals',
    info:'Squirrels are members of the family Sciuridae, consisting of small or medium-size rodents. The family includes tree squirrels, ground             squirrels, chipmunks, marmots (including woodchucks), flying squirrels, and prairie dogs. Squirrels are indigenous to the Americas,               Eurasia, and Africa, and have been introduced to Australia',
    img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/MattiParkkonen_Orava.jpg',
    readMore:'https://en.wikipedia.org/wiki/Squirrel'
	},
	{
  	name:'Lion',
    class:'mammals',
    info:'The lion (Panthera leo) is one of the five big cats in the genus Panthera and a member of the family Felidae. The commonly used term              African lion collectively denotes the several subspecies found in Africa.',
    img:'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
    readMore:'https://en.wikipedia.org/wiki/Lion'
  },
  {
  	name:'Aquila',
    class:'bird',
    info:'Aquila (Aquila Brisson, 1760) è un genere di uccelli rapaci della famiglia Accipitridae',
    img:'https://upload.wikimedia.org/wikipedia/commons/9/91/GoldenEagle-Nova.jpg',
    readMore:'https://it.wikipedia.org/wiki/Aquila'
  }


];
    
function animalsKingdom(containerName){
	var nameAnimals = document.querySelector(containerName);
	var errorAnimals = nameAnimals.querySelector('#error');

		function show(animalName){
  		    var animal = findAnimal(animalName);
    
    	       if(animal){
    		      hideError();
	    	      render(animal);
   	        }else{
    		  showError('Ненайдено ', animalName);
    	}  
 	 }
   function findAnimal(animalName){
  	for(var i = 0; i < animals.length; i++){
      if(animals[i].name === animalName){
        return animals[i];
      }
    }
    
    return false;
  }
   function render(animal){
     var animalsImg = nameAnimals.querySelector('#animalsImage');
        animalsImg.setAttribute('src', animal.img);
        animalsImg.style.width = "300px";
        animalsImg.style.height = "200px";
       
        nameAnimals.querySelector('#animalsName').innerText = animal.name;
       
        nameAnimals.querySelector('#animalsInfo').innerText = animal.info;
        nameAnimals.querySelector('#animalsClass').innerText = 'Class: ' +  animal.class;
       
     var animalReadMore = nameAnimals.querySelector('#animalsReadMore');
        animalReadMore.setAttribute('href', animal.readMore);
        animalReadMore.innerText='Read More...';
  }
   function showError(errorMessage, errorObject){
       errorAnimals.innerText = errorMessage + errorObject;
       errorAnimals.style.display = 'block';
    
  	console.error(errorMessage, errorObject);
 }
  
 function hideError(){
 	errorAnimals.style.display = 'none';
  }
  
  return{
  	show:show
  };
}
 var animalsKingdo = new animalsKingdom('#animals');
 var btn = function(value) {
     animalsKingdo.show(value);
}
