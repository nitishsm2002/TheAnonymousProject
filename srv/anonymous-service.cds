using { company.anonymousproject as ap } from '../db/schema';

@path: '/odata/v4/AnonymousService'
service AnonymousService {

  entity Feedback as projection on ap.Feedback;

}
