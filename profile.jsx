window.currentUser = { id: '19', name: 'Jane', email: 'jane@chameleon.io' };



export const  ActiveProfiles=({ profiles, onLaunchProfile }) => {
  const active  = profiles.filter(profile=>{
    return(
        !profile.disabled && 
        new Date(profile.last_seen_time) > new Date(new Date().getTime() - 24*60*1000)
    );
  });

  const filteredActive = active.filter((profile)=>{
    profile.email !== window.currentUser.email
  })

 

  return (
    <div>
       {filteredActive.map(profile=>(
        <div 
        key={profile.email}
        onClick={()=>onLaunchProfile(profile.email,profile.name)}
        >
{profile.name} - {profile.email}
        </div>
       )
      
     )}
    </div>
  )
}