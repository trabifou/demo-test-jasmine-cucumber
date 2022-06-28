Feature: Gamplay
    Check if the game win and lose


    Scenario: The game win
    Given the word is "abricot"
    When I enter "a"
     And I enter "b"
     And I enter "r"
     And I enter "i"
     And I enter "c"
     And I enter "o"
     And I enter "t"
    Then I win

    Scenario: The game lose
    Given the word is "abricot"
    When I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
     And I enter "x"
    Then I lose


