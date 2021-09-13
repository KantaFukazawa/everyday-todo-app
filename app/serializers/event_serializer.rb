class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :start, :end
end
