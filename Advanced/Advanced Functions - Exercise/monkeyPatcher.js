function result(activity) {
  
  switch (activity) {
    case 'upvote':
      this.upvotes++;
      break;
    case 'downvote':
      this.downvotes++;
      break;
      
    default:
      let rating;
      let upvotes = this.upvotes;
      let downvotes = this.downvotes;
      
      const totalVotes = upvotes + downvotes;
      const balance = upvotes - downvotes;
      
      if (totalVotes < 10){
        rating = "new";
      }
      else if (upvotes / totalVotes * 100 > 66) {
        rating = "hot";
      }
      
      else if (totalVotes > 100 && balance >= 0) {
        rating = "controversial";
      }
      
      else if (balance < 0) {
        rating = "unpopular";
      } 
      
      else {
        rating = "new";
      }
      
      if (upvotes + downvotes > 50) {
        const value = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
        upvotes += value;
        downvotes += value;
     
      }
      
      return [upvotes, downvotes, balance, rating]
  }
  
}
