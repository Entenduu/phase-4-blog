class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :genre
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
