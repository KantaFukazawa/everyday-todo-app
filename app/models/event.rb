# == Schema Information
#
# Table name: events
#
#  id         :bigint           not null, primary key
#  content    :text
#  end        :datetime         not null
#  start      :datetime         not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_events_on_user_id  (user_id)
#
class Event < ApplicationRecord
  belongs_to :user
end
