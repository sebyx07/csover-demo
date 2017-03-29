class CreateSupportRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :support_requests do |t|
      t.references :user
      t.string :title
      t.text :message
      t.date :closed_at

      t.timestamps
    end

    add_index :support_requests, :closed_at
  end
end
