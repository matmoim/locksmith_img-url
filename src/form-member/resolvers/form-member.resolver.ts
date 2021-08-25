import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LocksmithInput } from "../ql-inputs/locksmith.input.qraphql";
import { LocksmithObjectType } from "../ql-object-types/locksmith.object-type.graphql";
import { FormMemberService } from "../services/form-member.service";

@Resolver()
export class FormMemeberResolver {
  constructor(
    private formMemberService: FormMemberService
  ) { }

  @Query(() => [LocksmithObjectType])
  allLockSmithes() {
    return this.formMemberService.getAllLockSmithes();
  }

  @Query(() => [LocksmithObjectType])
  searchLockSmithes(@Args('key_word') keyWord: string) {
    // TODO please repair this method in service
    return this.formMemberService.searchLockSmith(keyWord);
  }

  @Mutation(() => LocksmithObjectType)
  createLockSmith(@Args('createLocksmithData') createLocksmitData: LocksmithInput) {
    return this.formMemberService.createLockSmith(createLocksmitData);
  }
}