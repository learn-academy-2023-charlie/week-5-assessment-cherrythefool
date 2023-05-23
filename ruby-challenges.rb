# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def filtered_drinks(array, letter)
    p array.filter { |word| word.downcase.include?(letter.downcase) }
end

filtered_drinks(beverages_array, filter_letter_o)
filtered_drinks(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def alpha_order_array_from_hash(hash)
    alphabetized_and_flattened = hash.values.flatten.sort()
    p alphabetized_and_flattened
end

alpha_order_array_from_hash(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def pedal_faster(number)
        # "Petr what's the fastest you've gone on a bike?"
        # "About 65, it was terrifying and exhilirating"
        # ( down Loveland Pass )
        if @current_speed + number > 65
            @current_speed = 65
        elsif @current_speed + number <= 65
            @current_speed += number
        end
    end

    def brake(number)
        if @current_speed - number >= 0
            @current_speed -= number
        else
            @current_speed = 0
        end
    end
end



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

petr_bike = Bike.new('Optima')
p petr_bike.bike_info

petr_bike.pedal_faster(20)
p petr_bike.current_speed
# 20
petr_bike.brake(5)
p petr_bike.current_speed
# 15
petr_bike.brake(30)
p petr_bike.current_speed
# 0
petr_bike.pedal_faster(70)
p petr_bike.current_speed
# 65
petr_bike.brake(30)
p petr_bike.current_speed
# 35

