class Post < ApplicationRecord
    belongs_to :user
    # validates :genre, presence: true
end
