require 'faker'

User.destroy_all
Post.destroy_all

5.times do
    User.create(username:Faker::Internet.user_name, password_digest: Faker::Internet.password)
    Post.create(user: User.all.sample, genre: Faker::Book.unique.genre, title:Faker::Lorem.sentence , content: Faker::Lorem.paragraph,)
end
puts 'seeding done!🎉'