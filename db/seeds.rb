# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p "create Users"
User.create!(
  email: 'user9@exam.com',
  password: 'aaaaaaaa',
)
User.create!(
  email: 'user10@exam.com',
  password: 'eeeeeeeee',
)

p "create Event"
User.all.each do |user|
  user.events.create!(
    content: 'テストテストテストテストテストテストテスト',
    end: '2022-02-14T12:30:00',
    start:'2022-02-14T10:30:00',
    title: "トレーニング"    
  )

  user.events.create!(
    content: 'テストテストテストテストテストテストテスト',
    end: '2022-02-2T12:30:00',
    start:'2022-02-2T10:30:00',
    title: "食事"    
  )

  user.events.create!(
    content: 'テストテストテストテストテストテストテスト',
    end: '2022-02-24T12:30:00',
    start:'2022-02-24T10:30:00',
    title: "仕事"    
  )
end
