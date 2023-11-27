class Publication {
  constructor(publication) {
    this.id = publication.id;
    this.title = publication.title;
    this.authors = publication.authors;
    this.month = publication.month;
    this.year = publication.year;
    this.doi = publication.doi;
    this.halId = publication.halId;
  }
}

export class JournalPublication extends Publication {
  constructor(publication) {
    super(publication);
    this.journal = publication.journal;
    this.volume = publication.volume;
    this.number = publication.number;
  }
}

export class ConferencePublication extends Publication {
  constructor(publication) {
    super(publication);
    this.conference = publication.conference;
    this.city = publication.city;
    this.country = publication.country;
  }
}

export class WorkshopPublication extends Publication {
  constructor(publication) {
    super(publication);
    this.workshop = publication.workshop;
    this.city = publication.city;
    this.country = publication.country;
  }
}