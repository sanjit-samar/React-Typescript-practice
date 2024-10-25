export const ProfileApi = async () => {
        try{
            const response = await fetch('https://api.escuelajs.co/api/v1/users');
            const finalRespose = response.json();
            return finalRespose;
        }
        catch(err){
            console.log(err);
        }
        
    
}