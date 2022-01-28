class VideosController < ApplicationController
  def find_matching_videos
    search_term = params[:search_term].downcase

    @matching_videos = Video.select { |video| video.title.downcase.include?(search_term) }.first(10)

    if (@matching_videos.count == 0)
      render json: [{ title: 'No suggestions'}]
    else
      @number_of_times_videos_viewed = VideoViewedLog.group(:video_id).count

      videos_dto = @matching_videos.map { |video|

        seconds_watched = VideoViewedLog.where(video_id: video.id).sum(:estimated_seconds_watched)
        video_length = video.video_length_second
        number_of_views = @number_of_times_videos_viewed[video.id] || 0

        video_rank = (seconds_watched / video_length) * number_of_views

        owner_name = VideoOwner.find{ |video_owner| video_owner.id == video.video_owner_id }.name

        {
          title: video.title,
          thumbnail: video.thumbnailurl,
          owner: owner_name,
          views: number_of_views,
          rank: video_rank
        }
      }

      videos_sorted_by_rank = videos_dto.sort_by { |hash| hash[:rank] }.reverse
      render json: videos_sorted_by_rank
    end
  end
end
