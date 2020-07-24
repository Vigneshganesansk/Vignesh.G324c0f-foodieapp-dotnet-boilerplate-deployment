using Server.API.Entities;
using Server.API.Models;
using Server.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Mapper
{
    public class EventMapper
    {
        private readonly IEventRepository eventRepository;
        public EventMapper(IEventRepository _eventRepository)
        {
            eventRepository = _eventRepository;
        }
        public List<Comments> MapCommentModeltoCommentEntity(int restaurantID,List<CommentsModel> commentsModelList)
        {
            List<Comments> comments = new List<Comments>();
            if(commentsModelList.Count()==0)
            {
                Comments comment = new Comments();
                comment.Description = string.Empty;
                comment.RestaurantId = restaurantID;
                comment.UserId = eventRepository.GetUserId(commentsModelList.First().Username);
                comments.Add(comment);
            }
            foreach(CommentsModel commentsModel in commentsModelList)
            {
                Comments comment = new Comments();
                comment.Description = commentsModel.description;
                comment.RestaurantId = restaurantID;
                comment.UserId = eventRepository.GetUserId(commentsModel.Username);
                comments.Add(comment);
            }
            return comments;
        }
        public List<CommentsModel> MapCommentEntityToCommentModel(List<Comments> comments)
        {
            List<CommentsModel> commentsModelList = new List<CommentsModel>();
            foreach(Comments comment in comments)
            {
                CommentsModel commentModel = new CommentsModel();
                commentModel.description = comment.Description;
                Userz user = new Userz() ;
                user = comment.User;
                commentModel.Username = user?.Username;
                commentsModelList.Add(commentModel);
            }
            return commentsModelList;
        }
    }
}
