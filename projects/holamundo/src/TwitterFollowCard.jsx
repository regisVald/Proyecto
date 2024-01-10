export function TwitterFollowCard ({username, name,isfollow}){
  const imageSrc = `https://unavatar.io/${username}` 
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'  
            src={imageSrc} alt="avatar 1" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
      </article>
    )
}