Site.destroy_all
User.destroy_all

Equipment.destroy_all
Delivery.destroy_all


puts "Seeding data..."


user1 = User.create!(name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name , company: Faker::Company.name , title: "Engineer", email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, password: "123")
user2 = User.create!(name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name , company: Faker::Company.name , title: "Engineer", email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, password:"345")
user3 = User.create!(name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name , company: Faker::Company.name , title: "Engineer", email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, password:"567")
user4 = User.create!(name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name , company: Faker::Company.name , title: "Engineer", email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, password:"789")
user5 = User.create!(name: Faker::Name.unique.first_name, last_name: Faker::Name.unique.last_name , company: Faker::Company.name , title: "Engineer", email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, password:"101")
 



site1 = Site.create(address_city: Faker::Address.city, address_street: Faker::Address.street_address, address_building_number: Faker::Address.building_number, address_zip: Faker::Address.zip, building_name: Faker::Company.name, layout_plan: './layout_plan1.jpg', user_id: user1.id )
site2 = Site.create(address_city: Faker::Address.city, address_street: Faker::Address.street_address, address_building_number: Faker::Address.building_number, address_zip: Faker::Address.zip, building_name: Faker::Company.name, layout_plan: './layout_plan1.jpg', user_id: user2.id)
manager1 = Manager.create!(user_id: user1.id, site_id: site1.id )
manager2 = Manager.create!(user_id: user2.id, site_id: site1.id )
contractor1= Contractor.create!(user_id: user2.id, site_id: site1.id )
contractor2= Contractor.create!(user_id: user3.id, site_id: site1.id )
contractor3= Contractor.create!(user_id: user4.id, site_id: site1.id )

invitation1= Invitation.create(site_id: site1.id, email: user4.email )
invitation2= Invitation.create(site_id: site1.id, email: "user6@gmail.com" )


equipment1= Equipment.create!(name: "Gate 1", site_id: site1.id)
equipment2= Equipment.create!(name: "Gate 2", site_id: site1.id)
equipment3= Equipment.create!(name: "Crane 1", site_id: site1.id)
equipment4= Equipment.create!(name: "Hoist 1", site_id: site1.id)
equipment5= Equipment.create!(name: "Hoist 2", site_id: site1.id)
equipment6= Equipment.create!(name: "Hoist 3", site_id: site1.id)

delivery1= Delivery.create!(equipment_id: equipment1.id, user_id: user1.id, start_time: "Sep 26 2022 10:30:00" , finish_time: "Sep 26 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery2= Delivery.create!(equipment_id: equipment1.id, user_id: user1.id, start_time: "Sep 27 2022 10:30:00" , finish_time: "Sep 27 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery3= Delivery.create!(equipment_id: equipment1.id, user_id: user3.id, start_time: "Sep 28 2022 10:30:00" , finish_time: "Sep 28 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery4= Delivery.create!(equipment_id: equipment1.id, user_id: user4.id, start_time: "Sep 28 2022 13:30:00" , finish_time: "Sep 28 2022 14:30:00", title: Faker::Name.unique.first_name)
delivery5= Delivery.create!(equipment_id: equipment2.id, user_id: user4.id, start_time: "Sep 29 2022 07:30:00" , finish_time: "Sep 29 2022 09:30:00", title: Faker::Name.unique.first_name)
delivery6= Delivery.create!(equipment_id: equipment2.id, user_id: user5.id, start_time: "Oct 02 2022 10:30:00" , finish_time: "Oct 02 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery7= Delivery.create!(equipment_id: equipment2.id, user_id: user3.id, start_time: "Oct 03 2022 10:30:00" , finish_time: "Oct 03 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery8= Delivery.create!(equipment_id: equipment2.id, user_id: user4.id, start_time: "Oct 04 2022 10:30:00" , finish_time: "Oct 04 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery9= Delivery.create!(equipment_id: equipment2.id, user_id: user3.id, start_time: "Oct 05 2022 10:30:00" , finish_time: "Oct 05 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery1= Delivery.create!(equipment_id: equipment3.id, user_id: user1.id, start_time: "Sep 26 2022 10:30:00" , finish_time: "Sep 26 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery2= Delivery.create!(equipment_id: equipment3.id, user_id: user1.id, start_time: "Sep 27 2022 10:30:00" , finish_time: "Sep 27 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery3= Delivery.create!(equipment_id: equipment3.id, user_id: user3.id, start_time: "Sep 28 2022 10:30:00" , finish_time: "Sep 28 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery4= Delivery.create!(equipment_id: equipment3.id, user_id: user4.id, start_time: "Sep 28 2022 13:30:00" , finish_time: "Sep 28 2022 14:30:00", title: Faker::Name.unique.first_name)
delivery5= Delivery.create!(equipment_id: equipment3.id, user_id: user4.id, start_time: "Sep 29 2022 07:30:00" , finish_time: "Sep 29 2022 09:30:00", title: Faker::Name.unique.first_name)
delivery6= Delivery.create!(equipment_id: equipment3.id, user_id: user5.id, start_time: "Oct 02 2022 10:30:00" , finish_time: "Oct 02 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery7= Delivery.create!(equipment_id: equipment3.id, user_id: user3.id, start_time: "Oct 03 2022 10:30:00" , finish_time: "Oct 03 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery8= Delivery.create!(equipment_id: equipment3.id, user_id: user4.id, start_time: "Oct 04 2022 10:30:00" , finish_time: "Oct 04 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery9= Delivery.create!(equipment_id: equipment3.id, user_id: user3.id, start_time: "Oct 05 2022 10:30:00" , finish_time: "Oct 05 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery1= Delivery.create!(equipment_id: equipment4.id, user_id: user1.id, start_time: "Sep 26 2022 10:30:00" , finish_time: "Sep 26 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery2= Delivery.create!(equipment_id: equipment4.id, user_id: user1.id, start_time: "Sep 27 2022 10:30:00" , finish_time: "Sep 27 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery3= Delivery.create!(equipment_id: equipment4.id, user_id: user3.id, start_time: "Sep 28 2022 10:30:00" , finish_time: "Sep 28 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery4= Delivery.create!(equipment_id: equipment4.id, user_id: user4.id, start_time: "Sep 28 2022 13:30:00" , finish_time: "Sep 28 2022 14:30:00", title: Faker::Name.unique.first_name)
delivery5= Delivery.create!(equipment_id: equipment4.id, user_id: user4.id, start_time: "Sep 29 2022 07:30:00" , finish_time: "Sep 29 2022 09:30:00", title: Faker::Name.unique.first_name)
delivery6= Delivery.create!(equipment_id: equipment4.id, user_id: user5.id, start_time: "Oct 02 2022 10:30:00" , finish_time: "Oct 02 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery7= Delivery.create!(equipment_id: equipment4.id, user_id: user3.id, start_time: "Oct 03 2022 10:30:00" , finish_time: "Oct 03 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery8= Delivery.create!(equipment_id: equipment4.id, user_id: user4.id, start_time: "Oct 04 2022 10:30:00" , finish_time: "Oct 04 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery9= Delivery.create!(equipment_id: equipment5.id, user_id: user3.id, start_time: "Oct 05 2022 10:30:00" , finish_time: "Oct 05 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery2= Delivery.create!(equipment_id: equipment6.id, user_id: user1.id, start_time: "Sep 27 2022 10:30:00" , finish_time: "Sep 27 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery3= Delivery.create!(equipment_id: equipment6.id, user_id: user3.id, start_time: "Sep 28 2022 10:30:00" , finish_time: "Sep 28 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery4= Delivery.create!(equipment_id: equipment6.id, user_id: user4.id, start_time: "Sep 28 2022 13:30:00" , finish_time: "Sep 28 2022 14:30:00", title: Faker::Name.unique.first_name)
delivery5= Delivery.create!(equipment_id: equipment5.id, user_id: user4.id, start_time: "Sep 29 2022 07:30:00" , finish_time: "Sep 29 2022 09:30:00", title: Faker::Name.unique.first_name)
delivery6= Delivery.create!(equipment_id: equipment5.id, user_id: user5.id, start_time: "Oct 02 2022 10:30:00" , finish_time: "Oct 02 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery7= Delivery.create!(equipment_id: equipment5.id, user_id: user3.id, start_time: "Oct 03 2022 10:30:00" , finish_time: "Oct 03 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery8= Delivery.create!(equipment_id: equipment5.id, user_id: user4.id, start_time: "Oct 04 2022 10:30:00" , finish_time: "Oct 04 2022 12:30:00", title: Faker::Name.unique.first_name)
delivery9= Delivery.create!(equipment_id: equipment5.id, user_id: user3.id, start_time: "Oct 05 2022 10:30:00" , finish_time: "Oct 05 2022 12:30:00", title: Faker::Name.unique.first_name)




puts "✅ Done seeding"
