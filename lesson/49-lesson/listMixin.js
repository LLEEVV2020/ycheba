export default {
    data(){
     return { 
       searcName: '',
       names: ['Vlad', 'Max', 'Elena', 'Igor']
 
     }
   },
   computed: {
     filteredNames(){
       return this.names.filter(name => {
         return name.toLowerCase().indexOf(this.searcName.toLowerCase()) !== -1
       })
     }
   }
 }