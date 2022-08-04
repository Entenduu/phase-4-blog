class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :genre, :title, :content
end
