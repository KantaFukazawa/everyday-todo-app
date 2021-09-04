class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.references :user
      t.string :title, null: false
      t.text :content
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.timestamps
    end
  end
end
