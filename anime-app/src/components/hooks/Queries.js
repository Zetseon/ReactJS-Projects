export const MEDIA_QUERY = `
query($page:Int,$perPage:Int,$sort:[MediaSort!],$type:MediaType, $genres:[String], $search:String){
  Page(page:$page,perPage:$perPage){
    pageInfo{
      lastPage
      currentPage
      hasNextPage
    }
    media(sort:$sort,type:$type,isAdult:false, genre_in:$genres, search:$search) {
      id
      description
      bannerImage
      coverImage{
        large
      }
      title{
        english
        romaji
      }
      episodes
      genres
      }
    }
  }

`;
export const MEDIA_QUERY_id = `
query($id:Int, $language:StaffLanguage,$role:CharacterRole){
	Media(id:$id){
    coverImage{
      large
    }
    title {
      romaji
      english
    }
    description
    genres
    averageScore
    favourites
    rankings{
      type
      rank
      context
    }
    status
    type
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    episodes
    
    seasonYear
    season
    synonyms
    characters(role:$role){
      edges{
        node{
          id
          name {
            full
          }
          image{
            medium
          }
        }
      	voiceActors(language:$language) {
      		name{
            full
          }
          image{
            medium
          }
      	}
      }
    }
    trailer{
      id
      site
      thumbnail
    }
  }
}



`;
