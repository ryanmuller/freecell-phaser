var Cards = Cards || {};

Cards.Suit = {
  CLUBS: 0,
  SPADES: 1,
  HEARTS: 2,
  DIAMONDS: 3
};

Cards.BLACK_SUITS = [Cards.Suit.CLUBS, Cards.Suit.SPADES];
Cards.RED_SUITS = [Cards.Suit.HEARTS, Cards.Suit.DIAMONDS];

Cards.Rank = {
  ACE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13
};

Cards.Color = {
  BLACK: 1,
  RED: 2
};

Cards.Card = function(suit, rank) {
  this.suit = suit;
  this.rank = rank;
};

Cards.Card.prototype.isBlack = function() {
  return _.contains(Cards.BLACK_SUITS, this.suit);
};

Cards.Card.prototype.isRed = function() {
  return _.contains(Cards.RED_SUITS, this.suit);
};

Cards.Card.prototype.sameSuit = function(other) {
  return this.suit == -1 || other.suit == -1 || this.suit == other.suit;
}

Cards.Card.prototype.sameColor = function(other) {
  return (this.isRed() && other.isRed()) || (this.isBlack() && other.isBlack());
}

Cards.Card.prototype.follows = function(other) {
  return other.rank - this.rank == 1;
}

Cards.Card.prototype.alternatingFollows = function(other) {
  return this.follows(other) && !this.sameColor(other);
}

Cards.EmptyCard = function() {
  return new Cards.Card(-1, 0);
};

Cards.Deck = function() {
  return _.flatten(_.map(Cards.Suit, function(suit) {
      return _.map(Cards.Rank, function(rank) {
        return new Cards.Card(suit, rank);
      });
    }));
};
